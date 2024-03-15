import { Context } from '../context/Context';
import { useContext } from 'react';
import userpng from '../images/user.png';
import workpng from '../images/work.png';

function Main() {
  const { lang } = useContext(Context)

  const data = [
    {
      id: 1,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 2,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 3,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 4,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 5,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 6,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 7,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 8,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    },
    {
      id: 9,
      image: workpng,
      title: lang.boxTitle,
      text: lang.boxText,
    }
  ]
  return (
    <div>
      <main>
        <section className="about">
          <div className="container">
            <h2 className="about__title">{lang.mainTitle}</h2>
            <div className="about__content">
              <div className="about__left">
                <img src={userpng} alt="user" />
              </div>
              <div className="about__right">
                <p className="about__name">{lang.iFio}</p>
                <p className="about__text">{lang.iInfo}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="work">
          <div className="container">
            <h2 className="work__title">{lang.workTitle}</h2>
            <div className="work__content">
              {
                data.map((item) => {
                  return <div className="work__box" key={item.id}>
                    <img src={item.image} alt="work" className="work__image" />
                    <h3 className="work__name">{item.title}</h3>
                    <p className="work__text">{item.text}</p>
                    <button className="work__button">{lang.boxButton}</button>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main