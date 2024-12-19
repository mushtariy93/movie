import React from "react";
import logo from "../../assets/images/logo.png";
import app from "../../assets/images/app.png";




const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and App Links */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            {/* Replace with your logo */}
            <div className="h-20 w-20"> <img src={logo} className="w-full h-full object-contain" alt="" />
 </div>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#" className="flex items-center bg-black">
              <img
                src={app}
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">О нас</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-red-500">
                Публичная оферта
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-500">
                Реклама
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-500">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-red-500">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Категории</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 flex items-center"
              >
                <span className="material-icons mr-2">movie</span> Кино
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 flex items-center"
              >
                <span className="material-icons mr-2">theaters</span> Театр
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 flex items-center"
              >
                <span className="material-icons mr-2">event</span> Концерты
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 flex items-center"
              >
                <span className="material-icons mr-2">sports_basketball</span>{" "}
                Спорт
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
          <p className="text-red-500 text-lg mb-4">+998 (95) 897-33-38</p>
          <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-red-500 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-red-500 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-red-500 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
