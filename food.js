// This file stores the dataset array for the application
/* const streetFoods = [ ... ]: Declares a block-scoped, read-only constant variable named 'streetFoods'.
   The square brackets [ ] define this variable as an Array (a sequential list of data data elements).
*/
const streetFoods = [
  /* Each block wrapped in curly braces { } represents an individual JavaScript Object.
     These objects act as data models, using key-value pairs to describe a single food item.
  */
  {
    name: "Pani Puri", // 'name' (Key) stores a String (Value) representing the readable title of the item
    type: "Snack", // 'type' classifies the food category, used by the filter buttons on your site
    image: "zoshua-colah-SqQcvvbaXcM-unsplash.jpg", // 'image' references a local file filename path saved inside your project folder
    region: "West India", // 'region' tracks geographical classification, used to sort items by location
    detail: "One of the most popular street snacks in India; eaten in one bite and filled with spicy water.", // 'detail' holds a descriptive paragraph blurb for the popup modal view
    isSpicy: true // 'isSpicy' stores a Boolean value (true/false) used to conditionally apply the flashing CSS animation
  }, // The trailing comma separates this object from the next item in the array list
  {
    name: "Vada Pav",
    type: "Snack",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&auto=format&fit=crop", // This 'image' key utilizes an external CDN direct web URL link instead of a local asset file
    region: "West India",
    detail: "Known as Mumbai’s burger; originally created as a cheap meal for workers.",
    isSpicy: true
  },
  {
    name: "Chole Bhature",
    type: "Meal",
    image: "download - 2026-05-21T235809.972.jpeg", // Handles complex local image filenames downloaded directly to your repository folder
    region: "North India",
    detail: "A spicy chickpea curry served with fried bread, often eaten for breakfast.",
    isSpicy: true
  },
  {
    name: "Aloo Tikki",
    type: "Snack",
    image: "zoshua-colah-SqQcvvbaXcM-unsplash copy.jpg", // References local files containing spacer characters in the filename string
    region: "North India",
    detail: "Crispy potato patties often topped with chutneys and yogurt.",
    isSpicy: false // Setting this Boolean value to 'false' tells your script engine to bypass the spicy pulse CSS highlight rules
  },
  {
    name: "Dosa",
    type: "Meal",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=400&auto=format&fit=crop",
    region: "South India",
    detail: "A thin crispy crepe made from fermented rice batter.",
    isSpicy: false
  },
  {
    name: "Idli Sambar",
    type: "Meal",
    image: "jacob-antony-H0_rN4gHc4k-unsplash.jpg",
    region: "South India",
    detail: "Soft steamed rice cakes served with lentil-based vegetable stew.",
    isSpicy: false
  },
  {
    name: "Momos",
    type: "Snack",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=400&auto=format&fit=crop",
    region: "North India",
    detail: "Originally from Tibet, now a street food favorite in India.",
    isSpicy: true
  },
  {
    name: "Litti Chokha",
    type: "Meal",
    image: "images.webp", // Supports specialized web-compressed format image asset extensions (.webp)
    region: "East India",
    detail: "Traditional dish from Bihar made with stuffed wheat balls and mashed vegetables.",
    isSpicy: false
  },
  {
    name: "Jhal Muri",
    type: "Snack",
    image: "litoon-dev-2NSGyW5P8JQ-unsplash.jpg",
    region: "East India",
    detail: "Spicy puffed rice snack commonly sold at train stations in Kolkata.",
    isSpicy: true
  },
  {
    name: "Pav Bhaji",
    type: "Meal",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&auto=format&fit=crop",
    region: "West India",
    detail: "Buttery bread served with spicy mashed vegetable curry.",
    isSpicy: true
  },
  {
    name: "Kathi Roll",
    type: "Snack",
    image: "images (1).webp",
    region: "East India",
    detail: "Flatbread wrap filled with spicy meat or vegetables.",
    isSpicy: true
  },
  {
    name: "Samosa",
    type: "Snack",
    image: "kabir-cheema-8T9AVksyt7s-unsplash.jpg",
    region: "North India",
    detail: "Triangular fried pastry filled with spiced potatoes and peas.",
    isSpicy: false
  },
  {
    name: "Bhel Puri",
    type: "Snack",
    image: "image.png", // Supports standard lossless portable network graphics format extensions (.png)
    region: "West India",
    detail: "Crunchy puffed rice mixed with chutneys and vegetables.",
    isSpicy: false
  },
  {
    name: "Medu Vada",
    type: "Snack",
    image: "images (2).webp",
    region: "South India",
    detail: "Savory donut-shaped fritter made from lentils.",
    isSpicy: false
  },
  {
    name: "Ghugni",
    type: "Snack",
    image: "image copy.png",
    region: "East India",
    detail: "Spicy curry made from yellow peas, popular in street stalls of Kolkata.",
    isSpicy: true
  },
  {
    name: "Appam",
    type: "Snack",
    image: "image copy 3.png",
    region: "South India",
    detail: "A bowl-shaped, thin, crispy rice pancake with a soft, fluffy center, made from fermented rice batter and rich coconut milk.",
    isSpicy: false
  } // The final item in your array list does not strictly require a trailing comma before the closing brace block
]; // The closing square bracket terminates your master dataset collection array structure cleanly with a semicolon