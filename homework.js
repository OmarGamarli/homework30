1)
//выведите в консоли ширину и высоту окна браузера с помощью window
console.log(window.innerHeight);
console.log(window.innerWidth);

2)
//создайте обработчик события для кнопки ниже, которая будет открывать новое окно в браузере при нажатии
<button id='open'>Open</button>
const id=document.querySelector('#open')
id.open()


3)
//создайте обработчик события для кнопки ниже, которая будет закрывать текущее окно в браузере при нажатии
<button id='close'>Open</button>
const id=document.querySelector('#open')
id.close()


4)
//создайте обработчик события для кнопки ниже, которая будет перемещать текущее окно в браузере при нажатии
<button id='move'>Open</button>
const id=document.querySelector('#open')
id.moveTo()


5)
//создайте обработчик события для кнопки ниже, которая будет менять размер текущего окно в браузере при нажатии
<button id='remove'>Open</button>
const id=document.querySelector('#open')
id.resizeTo()


6)
//выведите в консоли ширину экрана пользователя в пикселях
document.querySelector('#demo').innerHTML=screen.width
7)
//выведите в консоли высоту экрана пользователя в пикселях
document.querySelector('#demo').innerHTML=screen.height

8)
//выведите в консоли ширину экрана пользователя без панели задач и интерфейса вкладок в пикселях
document.querySelector('#demo').innerHTML=screen.availWidth


9)
//выведите в консоли высоту экрана пользователя без панели задач и интерфейса вкладок в пикселях
document.querySelector('#demo').innerHTML=screen.availHeight


10)
//выведите в консоли сколько битов использует браузер пользователя
console.log(document.querySelector('#demo').innerHTML=screen.colorDepth
);

11)
//выведите в консоли глубину экрана пользователя в пикселях
console.log(document.querySelector('#demo').innerHTML=screen.pixelDepth
);

12)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
<button id='back'>Open</button>
document.querySelector('#demo').innerHTML=history.back

13)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
<button id='next'>Open</button>
document.querySelector('#demo').innerHTML=history.forward

14)
//с помощью какого свойства можно проверить включены ли у пользователя куки
navigator.cookieEnabled
15)
//с помощью какого свойства можно проверить как называется имя приложения в браузере пользователя
navigator.appCodeName
16)
//с помощью какого свойства можно проверить как называется имя браузера пользователя
navigator.appName

17)
//с помощью какого свойства можно проверить какая версия у браузера пользователя
navigator.appVersion
18)
//с помощью какого свойства можно отправить заголовок браузера на сервер
navigator.userAgent
19)
//с помощью какого свойства можно узнать операционную систему пользователя
navigator.platform
20)
//с помощью какого свойства можно узнать язык браузера пользователя
navigator.language
21)
//с помощью какого свойства можно узнать находится в данный момент пользователь в сети или нет
navigator.onLine
22)
//с помощью какого свойства можно проверить включен ли java у пользователя
navigator.javaEnabled