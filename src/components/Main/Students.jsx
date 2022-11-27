import Student from "./Student.jsx"
import imgAnna from "../../assets/img/лиса.jpg"
import imgLenaY from "../../assets/img/Заяц мама.jpg"
import imgKsen from "../../assets/img/Летучая мышь.jpg"
import imgPavel from "../../assets/img/Поросёк.jpg"
import imgAzat from "../../assets/img/Кот жует.jpg"
import imgLuda from "../../assets/img/Дикобраз.jpg"
import imgRoma from "../../assets/img/Капибара.jpg"
import imgLenaG from "../../assets/img/Крыска.jpg"
import imgLenaL from "../../assets/img/Лама.jpg"
import imgNastya from "../../assets/img/Собакен.jpg"

const students = [
  {
    img: imgAnna,
    name: 'Анна',
    nickname: '@Anna',
  },
  {
    img: imgLenaY,
    name: 'Елена Ян',
    nickname: '@ElenaJan',
  },
  {
    img: imgKsen,
    name: 'Ксения',
    nickname: '@Ksenya',
  },
  {
    img: imgNastya,
    name: 'Павел',
    nickname: '@Pavel',
  },
  {
    img: imgAzat,
    name: 'Азат',
    nickname: '@Azat',
  },
  {
    img: imgLuda,
    name: 'Людмила',
    nickname: '@Ludmila',
  },
  {
    img: imgRoma,
    name: 'Рома',
    nickname: '@Roma',
  },
  {
    img: imgLenaG,
    name: 'Елена Г',
    nickname: '@Helen',
  },
  {
    img: imgLenaL,
    name: 'Елена Л',
    nickname: '@Lena',
  },
  {
    img: imgPavel,
    name: 'Анастасия',
    nickname: '@Nastya',
  },
]

const Students = () => {
  return (
    <div>
       <div className='container'>
        
        {students.map((item) =>{
          return <Student img={item.img} name={item.name} nickname={item.nickname} /> 
        })}
         
       </div>
      
    </div>
  )
}

export default Students;
