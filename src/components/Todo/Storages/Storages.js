import './storages.css'
const Storages = ()=>{


    return(
        <>
            <div className="text-blok">
                <h1>Про STORAGEs</h1>
                <p><strong>LocalStorage</strong></p>
                <p><strong>Local Storage</strong> - это механизм, который позволяет веб-приложениям сохранять данные локально в браузере. Это означает, что данные будут сохранены после закрытия браузера и перезагрузки страницы.</p>
                <p><strong>LocalStorage</strong> может быть использован для хранения различных типов данных, таких как строки, числа, булевы значения и объекты. Он может быть полезен для хранения пользовательских настроек (например темная тема на сайте), предпочтений пользователя и других данных, которые могут быть использованы для персонализации пользовательского опыта.</p>
            </div>
            <div className="code-blok">
                <pre>
                    <code>{
`//Для записи данных в LocalStorage
window.localStorage.setItem('myData', 'Hello, Redev!');
//записываем строку "Hello, Redev!" в LocalStorage с ключом "myData"

//получить данные из LocalStorage
const myData = window.localStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"`
                        }</code>
                </pre>
            </div>
            <div className="text-blok">
                <p>Данные в LocalStorage хранятся в виде <strong>строк</strong>. При необходимости данные могут быть преобразованы в другие типы данных с помощью методов JavaScript, например <strong>parseInt()</strong> или <strong>JSON.parse()</strong>.</p>
                <p>LocalStorage является <strong>безопасным</strong> механизмом хранения данных, поскольку данные сохраняются <strong>локально на компьютере пользователя</strong> и не передаются на сервер. Это также означает, что данные хранятся в пределах ограниченного объема памяти, доступного для браузера.</p>
                <p>Использование LocalStorage может улучшить пользовательский опыт, позволяя <strong>сохранять данные между визитами</strong> на сайт.</p>
            </div>
            <div className="text-blok">
                <p><strong>Cookies</strong></p>
                <p><strong>Cookies</strong> - это небольшие текстовые файлы, которые <strong>веб-сайты отправляют и хранят на компьютере пользователя</strong>  через его веб-браузер. Они представляют собой удобный механизм для хранения небольших данных, связанных с пользователем и веб-сайтом. В контексте React приложений, cookies могут быть использованы для сохранения состояния приложения и обеспечения персонализации.</p>
                <ul>
                    <li><strong>Сохранение состояния</strong>: Cookies позволяют хранить небольшие объемы данных, такие как пользовательские настройки, предпочтения, идентификаторы сессий и другие данные, которые нужно сохранить между различными запросами или сеансами пользователей.</li>
                    <li><strong>Аутентификация и авторизация</strong>: Cookies могут использоваться для хранения <strong>токенов аутентификации,</strong> позволяя пользователю оставаться аутентифицированным в приложении даже после перезапуска браузера.</li>
                    <li><strong>Персонализация и отслеживание</strong>: Cookies могут использоваться для анализа поведения пользователя на сайте(для рекламы) и предоставления персонализированного опыта(сохранение языка). Например, рекомендации товаров, основанные на предыдущих покупках.</li>
                </ul>
                <ul>Отличие от LocalStorage
                    <li><strong>Емкость данных</strong>: Cookies могут содержать до 4KB данных, в то время как Local Storage позволяет хранить около 5MB данных.</li>
                    <li><strong>Срок хранения</strong>: Cookies имеют срок хранения, который можно указать, в то время как данные в Local Storage хранятся неограниченное время, пока их явно не удалить.</li>
                    <li><strong>!!!Передача данных!!!</strong>: Cookies автоматически включаются в заголовки каждого HTTP-запроса к определенному домену, что делает их более подходящими для некоторых сценариев, таких как авторизация. Local Storage данные не автоматически передаются с каждым запросом.</li>
                </ul>
                <p>В React приложениях можно работать с cookies, используя JavaScript API для работы с ними или же  <a href="https://www.npmjs.com/package/cookie" target="_blank" rel="noopener noreferrer"> библиотеку</a>.</p> 
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`// Установка cookie на определенное количество дней
document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Получение всех cookie в виде строки
const allCookies = document.cookie;

// Разбивка строки на отдельные cookie
const cookiesArray = allCookies.split("; ");
const cookies = {};
cookiesArray.forEach(cookie => {
  const [name, value] = cookie.split("=");
  cookies[name] = value;
});

// Удаление cookie путем установки срока действия в прошлое
document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`
                        }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p><strong>Session Storage</strong></p>
                <p><strong>Session Storage</strong> - это еще один механизм хранения данных в браузере, сохраняет данные <strong>только на время сеанса</strong> браузера. Это означает, что данные будут удалены после закрытия браузера или вкладки. Это может быть полезно для хранения временных данных, таких как формы, которые не нужно сохранять после закрытия браузера.</p>
                <p>Session Storage имеет более ограниченный объем хранения данных, чем LocalStorage.</p>
                <p>Использование Session Storage может помочь улучшить пользовательский опыт, позволяя сохранять временные данные между переходами на разные страницы сайта.</p>
                <p>СИНТАКСИС ТАКОЙ ЖЕ КАК И У LocalStorage:</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`//записываем строку "Hello, Redev!" в Session Storage с ключом "myData"
sessionStorage.setItem('myData', 'Hello, Redev!');

//получить данные из Session Storage
const myData = sessionStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"
//преобразовываем полученные строки с помощью parseInt() или JSON.parse()`
                        }</code>
                </pre>
            </div>
            <div className='text-blok'>
                <p><strong>localForage</strong></p>
                <p><strong>localForage</strong> - это JavaScript-<a href="https://www.npmjs.com/package/localforage" target="_blank" rel="noopener noreferrer"> библиотеку</a>, предоставляющая удобный асинхронный интерфейс для работы с локальными хранилищами в браузерах. Эта библиотека позволяет сохранять данные в браузере пользователя, используя различные хранилища, такие как IndexedDB, WebSQL и localStorage, в зависимости от поддержки браузера.</p>
                <p>Для использования этой библиотеки необходимо ее установить и импортировать:</p>
            </div>
            <div className='code-blok'>
                <pre>
                    <code>{
`npm install localforage

import localforage from 'localforage';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    // Извлекаем сохраненный язык при загрузке компонента
    localforage.getItem('language').then(language => {
      if (language) {
        setSelectedLanguage(language);
      }
    });
  }, []);

  const handleLanguageChange = (language) => {
    // Сохраняем выбранный язык в локальном хранилище
    localforage.setItem('language', language).then(() => {
      setSelectedLanguage(language);
    });
  };

  return (
    <>
      <h1>Настройки</h1>
      <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">Английский</option>
        <option value="fr">Французский</option>
        <option value="es">Испанский</option>
      </select>
    </>
  );
};

export default App;`
                        }</code>
                </pre>
            </div>
        </>
    )
}
export default Storages;