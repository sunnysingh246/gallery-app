# 📸 Picsum Gallery App

A simple React application that fetches and displays random images from the Picsum API with pagination. Users can browse different pages of images, view author names, and open the original image source in a new tab.

---

## 🚀 Features

* Fetch images using the Picsum API
* Display images in responsive cards
* Pagination with Previous and Next buttons
* Loading state while fetching data
* Refresh current page data
* Smooth image hover zoom animation
* Lazy loading for better performance
* Responsive UI built with Tailwind CSS

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* Axios
* Tailwind CSS
* Picsum API

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Cards.jsx        # Image card component
│
├── App.jsx              # Main application logic
│
└── main.jsx             # React entry point
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder-name>
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔗 API Used

This project uses the Picsum Photos API:

https://picsum.photos/

Example API endpoint:

```
https://picsum.photos/v2/list?page=1&limit=20
```

---

## 🎮 Usage

* Click **Next ➡** to load the next page of images.
* Click **⬅ Previous** to return to the previous page.
* Click **Refresh Data** to fetch the current page again.
* Click any image card to open the original image source in a new tab.

---

## ⚡ Performance Optimizations

* Lazy loading images using the `loading="lazy"` attribute.
* Efficient React state updates using functional state setters.
* Proper use of React keys for rendering lists.
* API calls are managed with `useEffect` based on page changes.


## 👨‍💻 Author

Developed as a React practice project to learn API integration, component-based architecture, state management, and pagination.

---

## 📜 License

This project is open source and available under the MIT License.
