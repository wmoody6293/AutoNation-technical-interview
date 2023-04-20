## All the Images

The goal of this exercise, is to be able to render N amount of images in a nice grid

In our 'App.tsx' file, there's a hook already written for 'useData()'. This hook will fetch a certain amount of images of kittens with random title and description for you.

## Goals

1. Handle all scenarios of the data fetch:
   a. loading
   b. success
   c. failure
2. Create an input field that allows you to control how much data is fetched.
3. Display all of the data in a responsive Grid. Display each image with it's title in a card.
4. Scrolling using the mousewheel should feel completely seamless

## Stretch Goals

1. Progressively fetch images as the user scrolls

## Parameters

If you wish to change the dimensions of the images, the fakerapi allows you to explicitly set both:

- \_width
- \_height
