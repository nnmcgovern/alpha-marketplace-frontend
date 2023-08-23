# 🚗 Alpha Marketplace

Welcome to **Alpha Marketplace** - your go-to platform for buying and selling cars online. Built using the MERN stack, it brings together buyers and sellers across the globe.

<!-- <p align="center">
  <img src="" alt="Screenshot of Homepage" width="600px" />
</p> -->

## 🌟 Features

- **🏠 Beautiful Homepage**: Navigate with ease with a user-friendly interface.
- **🔎 Search & Filter**: Find your dream car using various filters.
- **🛒 Cart**: Add cars to your cart with just a click.
- **💼 Manage Listings**: Control your listings, whether you want to sell, edit, or delete.
- **👤 User Account Management**: Manage your account with a personal touch.

## 🛠️ Technology Stack

- **Frontend**: ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

- **Backend**: ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

- **Deployment**: ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

- **Version Control**: ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## 🚀 Getting Started

### Deployment

- Backend database & server deployed using Mongo Atlas & Heroku
- Frontend deployed via Netlify
- [Deployed E-commerce Website](https://alpha-marketplace.netlify.app)
- [API on Heroku](https://alpha-marketplace-backend-18469668e160.herokuapp.com/api/cars)
- [GitHub Repo](https://github.com/sjkoshy/alpha-marketplace-backend)

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the Repository**:

   ```bash
    git clone https://github.com/nnmcgovern/alpha-marketplace-frontend.git

   ```

2. **Navigate to Project Directory**:

   ```bash
   cd alpha-marketplace-frontend

   ```

3. **Install Dependencies**:

   ```bash
   npm install

   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

## Model

- The API has 2 models Car.js & User.js

```
const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  price: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  image: String,
})
```

```
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password_digest: String,
});
```

| Car Endpoints      | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| /cars              | See all cars available                                                    |
| /cars/user/:id     | Search for one car by user ID                                             |
| /cars/make/:make   | Search for cars by make                                                   |
| /cars/model/:model | Search for cars by model                                                  |
| /cars/type/:type   | Search for cars by type                                                   |
| /cars/year/:year   | Search for cars by year                                                   |
| /cars/color/:color | Search for cars by color                                                  |
| /cars/price/:price | Search for cars by price --> price includes a min & max                   |
| /cars/:id          | Search for one car by id                                                  |
| /cars              | Create new car                                                            |
| /cars/:id          | Update car listing --> this is restricted to the user who created the car |
| /cars/:id          | Delete car listing --> this is restricted to the user who created the car |

---

| User Endpoints | Description                 |
| -------------- | --------------------------- |
| /signup        | Signup with new account     |
| /login         | Login with existing account |
| /verify        | Authenticate the user       |
| /:id           | Search for user by id       |

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! Please submit a pull request with your suggestion.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more details.

## 💌 Contact

For inquiries, suggestions, or anything else, please reach out to any of us via LinkedIn 👇

<br />

Made by [Natalie McGovern](https://www.linkedin.com/in/natalie-mcgovern/) | [Keith Lee](https://www.linkedin.com/in/khlee93/) | [Sherilyn Koshy](https://www.linkedin.com/in/sherilynkoshy/) | [Rebekah Gomez](https://www.linkedin.com/in/rebekah-gomez/) | &copy; 2023
