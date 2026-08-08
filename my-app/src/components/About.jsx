import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>О нашей кофейне</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Мы обжариваем зерна вручную, чтобы сохранить уникальный вкус каждого сорта. Наша миссия — дарить моменты спокойствия в ритме большого города.</p>
            <p>Приходите к нам за чашкой кофе и хорошим настроением!</p>
          </div>
          <div className="about-image">
            <img
              src="https://sun9-82.vkuserphoto.ru/s/v1/ig2/S4_3gSrXuKKC30GmFYesbFp_VJ7nUkp8W0NrVZadusht4Sq7M_hTbZidfAfJ739kAmoEPUTxO6__K9aDeZn_SrBT.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&u=Q8XhxaOPeaCISIzknuXTAGafKHrYZBYkJQrsrQXwJts&cs=1024x0"
              alt="Интерьер нашей кофейни"
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;