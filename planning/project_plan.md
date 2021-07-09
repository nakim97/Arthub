# Project Plan

Pod Members: **Brian Balthazar, Stella Kim, Rodrigo Martinez**

## Problem Statement and Description

**Problem Statement:**

Help beginner artists gain exposure by helping them securely share their work with other beginner artists in a safe and welcoming community platform.

**Description:**

Starting out in art and looking to gain exposure as a beginner artist can be an intimidating process amongst experienced artists. Our goal is to provide beginning artists with a place to share and explore art with other artists in the community, while also providing a sense of comfort amongst fellow beginner artists without feeling like they’re not good enough/not feeling overwhelmed or intimidated.

By making an account on our platform, artists can then share/upload their artwork, get feedback/comments, learn, view other artists' works, and participate in community forums to share their ideas/support each other.

Our target audience are beginner artists wanting to gain exposure, build a community, get support from peers, or learn art. 
*** If the marketplace feature is implemented, the target audience would also be to other artists looking to connect/collaborate, recruiters, buyers, etc. ***


## User Roles and Personas

**User Roles:**

Define the set of roles and give each role a simple and clear name (like "student" and "tutor" from the example above). Include a very brief (one sentence?) description of what defines the role

* Beginner Artist/ Prospective Artist : A user who is looking to learn art, share their artwork, be a part of a community of beginner artists, and get constructive feedback.

* Viewers interested in art: A user who is interested in viewing artwork.

**Stretch Feature**

* Potential Buyers: Users interested in buying art from other users. 

**User Personas:**

Beginner Artist/Prospective Artist:

* Matt is a college student majoring in computer science who recently realized that the major didn’t fit his interests and is looking for a career change to art. Matt does not have any experience in art and is looking for a platform where he could post his artwork for constructive feedback and learn art skills to prepare an art portfolio. Changing careers and learning art can be a daunting experience and being in a community full of fellow beginner artists would provide a valuable experience.

* Dobby is a highschool student living in Los Angeles. While she isn’t looking for a career in art, in her free time she enjoys doodling and wants to take it a step further. Dobby enjoys art and wants to be a hobby artist drawing fanart, but finds the amount of art resources online & experienced artists to be intimidating as a beginner/hobby artist. Finding a platform where she feels welcomed and can have the opportunity to learn with fellow beginner artists who also share her interests would provide a great gateway for her.
 

Viewers interested in art:

* Shawn is a high school student looking for inspiration to start his very own art collection sometime in the near future. Although Shawn has very little experience making art, he is hoping to find a platform that lets him explore art other people in his stage are producing. When Shawn has free time, he hopes to access a platform through his computer and admire the artwork beginning artists have published on the site or watch tutorial videos on covering artwork in a certain area of interest.

* Tony is a college junior looking for a creative outlet to escape the stress of being a college student. While Tony does not have the time to start producing art himself, he is interested in the art other people make and seeing what interpretation others may have on an art piece. During his lunch breaks, Tony explores the artwork on our platform through his phone. Tony also occasionally leaves constructive criticism on posts he finds interesting during his time on the platform.
 
 
Potential Buyers **Stretch Feature**:

* Patricia is a small business owner from Detroit that enjoys buying art from local vendors in her free time. Patricia does not have much experience in creating art or buying art online, so she is hoping to find a legitimate platform where she can find amazing artwork from artists that are just starting out to help fund them. She knows what it is like to start with nothing, so she wants to make sure to give artists just what they need in order to help them fina	cially.

* Ricardo is a college freshman from New York looking for some art to fill his college dormitory with. He is a long way from home, so he is looking for a platform where he can find artwork from artists that reminds him of home so that he will not feel so homesick. He is also looking for artists that understand what he is going through and have specific tags that mention art that can be posted in a dorm room. He also likes leaving meaningful posts about how the particular artist helped them overcome homesickness and anxiety, especially when he moves between houses or travels to visit family.

## User Stories

User Stories:
	
1. As a beginner artist/prospective artist, I want to …
* Upload and post artwork where I display my newest artwork pieces and receive feedback via likes/comments
* Participate in a community forum tab where I can give/receive constructive feedback while also being a part of the community/make connections with fellow beginner artists.
* Share my artwork with potential buyers to build up a name reputation for future job opportunities as well as for business/marketing prospects

2. As either a beginner artist/prospective artist or a viewer interested in art, I want to… 
* Sign in to be able to own your actions/interactions (posting, commenting, etc)
* View a filtered display of artworks by keywords/tags to see art references, look up specific artworks, and see how other artists draw differently.
* Have the ability to like posts so I can view them at a later time.
* Navigate to a liked post tab and see all the posts I have liked in a gallery format (to use as art references/inspiration and posts from the community tab to use as feedback/tips)
* View and search art tutorials via the tutorial search tab so that I can target & hone my art skills or learn more about art

3. As a viewer interested in art, I want to… 
* Click on an image(artwork) and be redirected to a page where I can find more information on the artwork. 
* Leave and view comments on posts(artwork) I find interesting to gain a better understanding of the type of feedback being given to users who post.
* Click on an artist’s profile and be redirected to a page where I can find a small bio, picture, and link to other social media platforms (ArtStation, Instagram, personal portfolio website, Facebook, etc.)

 **Stretch Feature**
 
4. As a potential buyer, I want to… 
* Find artwork created by artists by searching for their profile name or in a marketplace.
* Buy artwork created by artists on their page or in the marketplace.
* Have artists put in personalized tags that help me find what I am interested in.
* View the social media accounts of the artists that I am buying from to connect with them.

## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.

List of pages:
* Home Page
* User Profile Page
* About Page
* Explore Page 
* Learn Page
* Marketplace Page (Stretch Feature)
* Community Page
* Create New Post Page
* Edit Portfolio Page

Screenshot 1: 

<img width="437" alt="Screen Shot 2021-07-09 at 11 54 34 AM" src="https://user-images.githubusercontent.com/57072287/125124109-7103c000-e0ac-11eb-98bd-1eea410d8a4b.png">

Screenshot 2: 

<img width="420" alt="Screen Shot 2021-07-09 at 11 55 31 AM" src="https://user-images.githubusercontent.com/57072287/125124192-9264ac00-e0ac-11eb-87d4-f2e10ee421d8.png">

Screenshot 3: 

<img width="419" alt="Screen Shot 2021-07-09 at 11 56 03 AM" src="https://user-images.githubusercontent.com/57072287/125124239-a4dee580-e0ac-11eb-8128-774268755ead.png">


Link to **all** wireframes(public): https://www.figma.com/file/6leFJTd88cHkmYfATtc9u0/ArtHub-Wireframes?node-id=0%3A1

## Data Model

**Table Name: User's**
| Column Name | Type | Description |
| :---: | :---: | :---: |
| id | integer | Primary Key |
| username | Text Not null unique | User’s username |
| first_name | Text Not null | User’s first name |
| last_name | Text Not null | User’s last name |
| profile_url | text | User’s profile picture |
| banner_url | text | User’s banner picture |
| password | Text Not null | User’s password|
| email | Text Not null unique check (Position(‘@’ IN email) > 1) | User’s email |
| insta_url | text | URL of instagram account |
| facebook_url | text | URL of facebook account |
| twitter_url | text | URL of twitter account |
| is_admin | Boolean Not null default false | If the user is an administrator |

**Table Name: Photo Upload**
| Column Name | Type | Description |
| :---: | :---: | :---: |
| id | integer | Primary Key |
| name | Text | Name/Title of the photo |
| created_at | date | Timestamp of photo upload |
| description | text | Description of the photo |
| img_url | text | URL of photo |
| type | text | Type that the photo (Depending on what page the photo would be in) |
| user_id | integer | The specific user’s id |

**Table Name: Photo Post**
| Column Name | Type | Description |
| :---: | :---: | :---: |
| id | integer | Primary Key |
| name | Text | Name/Title of the post |
| user_id | integer | The specific user’s id |
| created_at | date |Timestamp of post |
| description | text | Description of post |
| type | text | Type, depending on the tab |
| img_id | integer | The picture’s id |

**Table Name: Comments on Photos**
| Column Name | Type | Description |
| :---: | :---: | :---: |
| id | integer | Primary Key |
| user_id | integer | The specific user’s id |
| created_at | date | Timestamp of comment|
| description | text | Description of comment |
| type | text | Type, depending on the tab |
| post_id | integer | Category/tag for post comments |

**Table Name: Forum Post**
| Column Name | Type | Description | 
| :---: | :---: | :---: |
| id | integer | Primary key | 
| name | text | name/title of the forum post | 
| user_id | integer | The specific user’s id | 
| created_at | date | Timestamp of forum post | 
| description | text | Description of forum post | 
| forum_id | integer | The forum’s id | 

**Table Name: Forum Comments**
| Column Name | Type | Description | 
| :---: | :---: | :---: |
| Id | integer | Primary Key |
| name | text | Text entered for the comment | 
| created_at | text | Timestamp of comment | 
| forum_id | integer | Category/tag for forum comments | 
| user_id | integer | The specific user’s id | 


## Endpoints

| CRUD | HTTP Verb | Description | User Stories |
| :---: | :---: | :---: | :---: |
| Create | POST | Create a new user account | 2,4 |
| Create | POST | Log in to a user account | 2,4 |
| Update | PUT | Update a user’s profile | 2,4 |
| Read | GET | Getting all the post under a single user id | 2 |
| Read | GET | View a user’s profile | 2,4 |
| Create | POST | Create a new forum post | 2 |
| Create | POST | Create a new regular post | 2 |
| Read | GET | Get all posts made by users | 2,4 |
| Read | GET | Fetch a single post | 2,4 |
| Delete | DELETE | Delete a post | 2|
| Update | PUT | Update a post | 2 |
| Create | POST | Create a new forum comment | 2,4 |
| Delete | DELETE | Delete a forum post | 2,4 |


***Don't forget to set up your Issues, Milestones, and Project Board!***

Milestones, Issues, and Project Board have been set up!
