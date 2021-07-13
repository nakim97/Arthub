import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Card, Input, InputField } from "components"
import apiClient from "services/apiClient"
export const useLoginForm = ({user, setUser}) => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.username) {
      navigate("/dashboard")
    }
  }, [user, navigate])

  const handleOnChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)

    const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
    if (error) setErrors((e) => ({ ...e, form: error }))
    if (data) {
      setUser(data.user)
      apiClient.setToken(data.token)
      localStorage.setItem("kavholm_token", data.token)
    }

    setIsProcessing(false)
  }

  return {isProcessing,
    form, errors, handleOnSubmit, handleOnChange}
}
