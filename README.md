![Screenshot_1727442107](https://github.com/user-attachments/assets/33c93872-9907-44b7-903a-3aa769361205)# Meals App - React Native

## Overview

The **Meals App** is a simple mobile application built using React Native. It allows users to browse through a variety of meal categories and view detailed information about individual meals. Users can also mark meals as favorites and view them in a separate section dedicated to favorites.

## Features

1. **All Categories Screen**:
   - Displays a list of meal categories.
   - Clicking on a category shows all meals within that category.
   - Clicking on a meal provides detailed information such as ingredients, steps, and other relevant data.

2. **Favorites Screen**:
   - Displays a list of meals that the user has marked as favorites.
   - Favorites are managed using React's `useContext` hook to maintain global state across the app.
   - <img src = "https://github.com/user-attachments/assets/74dea65a-eeac-4d78-9294-4630768351b0" height = 50/>


## Screens

1. **All Categories Screen**:
   - Lists all meal categories.
   - On clicking a category, the app navigates to a screen displaying meals under that category.
   - <img src = "https://github.com/user-attachments/assets/81bcc4a0-6c9a-4ec3-8f95-650b6b416d42" height = 50/>  <img src = "https://github.com/user-attachments/assets/dd6203b0-194b-437b-a729-52ea573c6ee7" height = 50/>

2. **Meal Details Screen**:
   - When a meal is clicked, a new screen shows the meal’s detailed information, such as ingredients, cooking steps, and other details.
   - <img src = "https://github.com/user-attachments/assets/3fe30149-cfbd-4b88-8f50-1425ba7a6130" height = 50/>  <img src = "https://github.com/user-attachments/assets/f853f047-59c5-40a2-89a6-97a2094fba38" height = 50/>

3. **Favorites Screen**:
   - Displays meals that the user has marked as favorites.
   - Users can add or remove meals from favorites, and the state is managed globally using the `useContext` hook.
   - <img src = "https://github.com/user-attachments/assets/81724dea-7cfe-4710-83d3-00501431bd87" height = 50/>  <img src "https://github.com/user-attachments/assets/dd669659-8dcd-4642-8a23-851365041881" height = 50/>


## Tech Stack

- **React Native**: Used for building the cross-platform mobile app.
- **React Navigation**: For navigating between different screens in the app.
- **State Management**: Global state is managed using the `useContext` hook to track and update favorite meals.

## Usage

- **All Categories Screen**: Browse through meal categories and explore different meals under each category.
- **Meal Details Screen**: Get detailed information about the selected meal.
- **Favorites Screen**: View meals that have been marked as favorites. Favorites are managed across the app using `useContext` for a consistent experience.


Enjoy cooking with the **Meals App**!
