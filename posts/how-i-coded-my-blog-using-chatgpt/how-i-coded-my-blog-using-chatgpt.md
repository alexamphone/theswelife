---
title: 'How I Coded My Blog Using ChatGPT: An Experiment'
date: '2023-01-16'
author: 'Alex Amphone'
---

## Introduction

ChatGPT has been quite the craze this past couple of months, achieving an astonishing million users within a week of its launch to the public. It can disrupt industries and outright replace many of our jobs. It has already proven a formidable tool for generating art, content, and ideas. I've even seen people using the bot to create entire businesses accompanied by step-by-step execution plans! It's about time I give this glorified tech demo a spin. Using ChatGPT to code my blog sounds like a fun experiment! Let's see how it went.

## Goals of this Experiment

My aim with this experiment is to evaluate ChatGPT's effectiveness and correctness for producing code. Anywhere and any chance that I get to ask ChatGPT for help, I likely will. I'll ask follow-up questions to demonstrate its ability to retain context. In addition, I'll also share any valuable tips, gotchas, and shortcomings I stumbled upon throughout the experience.

## Project Details

Before I begin, I want to outline the minimum requirements for the project as they will influence the prompts that I give to ChatGPT.

These are the technology requirements:

1. react + nextjs
2. typescript
3. tailwindcss

Note that I have a rudimentary understanding of nextjs (I went through the tutorial), and I've never used tailwindcss.

These are the functional requirements:

1. a home page that will list all blog posts by title, author, and date
2. dynamic routing for the blog post page that will use the post id as a slug for the URL
3. parsing markdown files into blog posts

## Setting Up the Project

Before I can copy pasta any code, I need a project first. There are a lot of CLI tools available for scaffolding and configuring projects. I hope ChatGPT flies through this section with flying colors.

### **1. Generating a Nextjs Project Configured with Typescript**

I'll ask the bot how to generate a nextjs project that uses typescript.

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/generate-project.png" alt="Result of asking ChatGPT to generate a nextjs project with typescript">

That's a great start. I'm given instructions on how to install and run the app.

### **2. Configuring Tailwindcss**
Next, I'll ask it to configure Tailwindcss for me.

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/configure-tailwindcss.png" alt="Result of asking ChatGPT to configure Tailwindcss">

The bot returns a thorough answer with seven steps detailing installation, CLI usage, configuration code, and a script to put in the package.json to build the CSS file. This would all sound amazing if it didn't break my build. After consulting the official documentation, I found some syntax dissimilarities between my configuration files.

### **Takeaways**

It's important to note that ChatGPT is trained on older data. In the ever-changing realm of web development, it's easy to see that it can return outdated code. This case didn't bother me much, but I see this becoming a frustrating experience for newcomers with little to no coding experience.

- ChatGPT is trained on older data and might give outdated and inaccurate answers.

## Generating the Code

Now that the project is generated and running, it's time to code the app. During this section, I'll push the limits of ChatGPT by asking follow-up questions to add and refactor code, clarify any ambiguities, and explain concepts that I either don't understand or want to learn more about. I'll be approaching this as a novice engineer asking the “right” questions (hopefully).

### **1. Coding the Home Page**

For the home page, I want to list all blog posts by their title, author, and date created.

I'll ask the bot to generate the home page with this question, “Can you give me the code for a home page that lists blog posts by their respective title, author, and date?” Here's the code that was generated:

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/generate-homepage-with-posts.png" alt="Result of asking ChatGPT to generate code for home page that lists blog posts">

Sweet! This is a great start. The bot generates the code and explains each part in detail. Unfortunately, the output isn't entirely correct. The code uses the legacy usage of the Link component.

### **Takeaways**

- ChatGPT is good at retaining context but only sometimes uses all context. The code given here is tailored for react and nextjs. I'm impressed with the output, but the bot forgot to use typescript for the code. An easy fix to this problem is to make the prompts more specific.

**Follow-up Question 1: If there are new posts that are added, will this page display them?**

This is where the fun begins. From my knowledge of nextjs, you can use getStaticProps to fetch data at build time. Would the page fetch blog posts created after the build?

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/homepage-follow-up-1.png" alt="Result of asking ChatGPT if new posts added after build would be displayed on the page">

Awesome! This means I was paying attention when tinkering around with Nextjs. The bot confirms my suspicions that the home page wouldn't be able to fetch new blog posts after build-time. It also gives an example of how to do this with server-side rendering.

**Follow-up Question 2: Can you implement this using mock data instead?**

Prototyping with some dummy data is a great way to test code and UI quickly. Let's see if the bot can provide that code for me.

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/homepage-follow-up-2.png" alt="Result from asking ChatGPT to generate the code for mock data">

This is precisely what I wanted. With this code and some basic styling, the home page looks like this:

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/homepage-screenshot-1.png" alt="Home page listing blog posts by their title, author, and date created">

**Follow-up Question 3: How would I do this with Blog Posts Stored as Markdown Files?**

Okay, let's go with the actual implementation I wanted. Here I asked ChatGPT to refactor the implementation if I was to parse blog posts as markdown files.

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/homepage-follow-up-3.png" alt="Result of asking ChatGPT how to implement the home page parsing blog posts as markdown files">

ChatGPT3 brings in the gray-matter library to parse the “header” of the markdown file, explaining how it's being used to extract the metadata we wanted: title, author, and date. I can see this being an excellent way to discover new libraries on the fly.

### **Takeaways**

I realize that using ChatGPT is a great way to learn new things. In this case, I'm potentially learning new APIs, libraries, and ways to structure code.

- Using ChatGPT allows me to gain exposure to new libraries, proper API usage (mostly), and different ways to structure code.

## **2. Coding the Post Page**

The home page is more or less done functionally, thanks to our new friend, ChatGPT. Now it's time to code the blog post page! I will need a dynamic route to serve the correct blog post based on the slug in the URL. I'll also ask the bot to add a backlink to the home page.

First, I asked it, “How would I create a dynamic route in nextjs?”

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/dynamic-routes.png" alt="Result of asking ChatGPT how to create a dynamic route in nextjs">

This is the correct answer, but I do want a different solution. All my paths for my blog posts will be infrequent to change, so I want to generate all the paths at build time. Let's push the bot to give us the correct answer for that particular case.

**Follow-up Question 1: The Paths are Infrequent to Change. Is there another Way?**

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/dynamic-routes-follow-up-1.png" alt="Result of asking ChatGPT for another way to implement dynamic routes if paths are infrequent to change">

The code is given, and everything checks out. We do need blog post content, though. It would be silly only to display the title, author, and date on the blog post page. Let's follow up again.

**Follow-up Question 2: What about the Post Content?**

It would be interesting to be vague with the question this time. Let’s see what happened.

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/dynamic-routes-follow-up-2.png" alt="Result of asking ChatGPT to add the code to show the blog post content on the blog post page">

And here's the code it gave with the answer:

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/blog-content-code.png" alt="Code to show the blog post content on the blog post page">

The bot gives a thorough answer and the code to accomplish what I asked. I’m amazed that the bot understood what I needed with little context given.

### **Takeaways**

- ChatGPT can give helpful answers even when given vague questions.

After some refactors, a little more styling, and adding a link back to the home page, the post page looks like this:

<img src="https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/how-i-coded-my-blog-using-chatgpt/postpage-screenshot.png" alt="Picture of the post page displaying the post title, author, date created, and content">

## Things I Learned About ChatGPT

- ChatGPT is trained on older data. Answers may be outdated and inaccurate.
- ChatGPT is excellent at retaining context but sometimes doesn’t use all context. Fix this by making prompts as specific as possible.
- ChatGPT is a fantastic tool for learning new technologies and discovering new libraries.
- ChatGPT is conversational. It can give helpful responses even from vague prompts.
- ChatGPT can give different responses from the same prompt.

## Conclusion

Using ChatGPT as a programming assistant was an interesting experience. I generated a significant portion of the code for my blog using the model, and it also helped me learn new technologies and concepts. Although ChatGPT proved a helpful tool, I wouldn't rely on it solely for code generation. Instead, it is a valuable resource to consult when learning or improving my workflow. It shouldn't replace developer jobs in the near future, but developers who use ChatGPT to enhance their skills will have an advantage. In short, ChatGPT is a senior engineer I can bother with no repercussions 🙂.

## Where to Next?

Part 1 was a fun little experiment where I tried to bootstrap the initial skeleton of my blog using ChatGPT. From here on out, I’ll be making a series where I take on the challenges of building my blog. Follow along my journey as I learn through developing exciting new features to crafting a seamless design system and tackling everything in between, like architecture and scalability.