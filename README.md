# TheGoodGameIntern React Search 🔍
**Fast & Responsive Search Application built with React & Vite**

A clean, efficient search application built with **React** and **Vite** that provides real-time search functionality through local JSON data. Features a mobile-responsive design with vanilla CSS styling, demonstrating modern frontend development practices without external UI libraries.

🌐 **Live App**: [SearchFunc](https://thegoodgameintern-react-search.onrender.com)
<br/>

![Screenshot 2024-12-26 181010](https://github.com/user-attachments/assets/4e87a999-d555-4af7-b6ee-bd74a0274a1c)
Search functionality
![Screenshot 2024-12-26 181040](https://github.com/user-attachments/assets/0ad2591e-20aa-4088-81df-14f5d0eb0d15)

---

## 🔍 Features

- ⚡ **Real-time Search**: Instant results as you type
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- 🎨 **Vanilla CSS**: Custom styling without external libraries
- 📊 **JSON Data Source**: Local data.json for quick loading
- 🚀 **Vite Powered**: Fast development and build process
- 🔤 **Smart Filtering**: Search across multiple item properties
- ✨ **Clean UI**: Minimalist, user-friendly interface

---

## 🧱 Tech Stack

| Frontend       | Build Tool    | Styling         | Data Source      |
|----------------|---------------|-----------------|------------------|
| React.js       | Vite          | Vanilla CSS     | Local JSON       |
| JavaScript ES6 | Hot Reload    | CSS3 Flexbox    | data.json        |
| JSX            |               | Media Queries   |                  |

---

## 🚀 How It Works

### 🔍 Search Functionality
1. **Data Loading**: Application loads items from `data.json` on startup
2. **Real-time Filtering**: Search input triggers immediate filtering
3. **Smart Matching**: Searches across multiple item properties (name, category, description)
4. **Dynamic Display**: Results update instantly without page refresh

### 📄 Data Structure (data.json)
```json
[
  {
    "price": "$16.79",
    "name": "Founders Centennial IPA",
    "rating": {
      "average": 4.90259815077017,
      "reviews": 407
    },
    "image": "https://www.totalwine.com/media/sys_master/twmmedia/h9d/h94/11167126519838.png",
    "id": 31
  }
]
```

---

## 🛠️ Installation & Setup

### 📦 Prerequisites
- Node.js v16+ installed
- npm or yarn package manager
- Modern web browser

---

### 🔌 Clone the Repository

```bash
git clone https://github.com/yourusername/TheGoodGameIntern-React-Search.git
cd TheGoodGameIntern-React-Search
```

---

### ⚙️ Setup Instructions

#### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

#### 2. Start Development Server
```bash
npm run dev
# or
yarn dev
```

#### 3. Build for Production
```bash
npm run build
# or
yarn build
```

#### 4. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

#### 5. Access the Application
Development server typically runs on:
```
http://localhost:5173
```
---

## 🧠 Learning Outcomes

- Mastered React functional components and hooks
- Implemented real-time search with performance optimization
- Created responsive layouts with vanilla CSS
- Learned Vite build tool configuration and optimization
- Practiced component-based architecture design
- Gained experience with JSON data manipulation

---

## 📈 Future Enhancements

- 🌙 **Dark Mode**: Theme switching functionality
- 💾 **Local Storage**: Remember search history and preferences
- 🔗 **URL Parameters**: Shareable search results
- 📈 **Analytics**: Track popular searches and user behavior
- 🌐 **API Integration**: Connect to external data sources

---

## 🎯 Project Highlights

- **Zero Dependencies**: Uses only React and Vite for minimal bundle size
- **Performance Focused**: Optimized search with debouncing and efficient rendering
- **Accessible Design**: Semantic HTML and keyboard navigation support
- **Developer Experience**: Hot reload and fast build times with Vite
- **Scalable Architecture**: Easy to extend with additional features

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/search-enhancement`)
3. Commit your changes (`git commit -m 'Add search enhancement'`)
4. Push to the branch (`git push origin feature/search-enhancement`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](https://github.com/TiwariAry/TheGoodGameIntern-React-Search/blob/main/LICENSE).  
Feel free to fork, modify, and build on it.

---

## 👨‍💻 Author

**Aryan Tiwari**  
📫 [LinkedIn](https://www.linkedin.com/in/aryan-tiwari-6844a9250)  
💻 [GitHub](https://github.com/TiwariAry)

---

## 🙏 Acknowledgments

- React team for the excellent documentation
- Vite team for the blazing-fast build tool
- Open source community for inspiration and best practices

---

*Built with ⚡ using React, Vite, and vanilla CSS*
