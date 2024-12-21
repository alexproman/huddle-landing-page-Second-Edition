import growTogether from '../assets/images/illustration-grow-together.svg'
import flowingConversation from '../assets/images/illustration-flowing-conversation.svg'
import yourUser from '../assets/images/illustration-your-users.svg'
import { useState } from 'react'



const Sections = () => {
    const [sectionsData] = useState([
        {
            id:1,
            title:`Grow Together`,
            paragraph:`Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form.`,
            img:growTogether,
            imgAlt:`grow-together-img`
        },
        {
            id:2,
            title:`Flowing Conversations`,
            paragraph:`You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                    just-in-time loading for a more natural flow.`,
            img:flowingConversation,
            imgAlt:`flowing-conversation-img`
        },
        {
            id:3,
            title:`Your Users`,
            paragraph:`It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                    once signed in to your app, your users can start chatting immediately.`,
            img:yourUser,
            imgAlt:`your-users-img`
        },
    ])
  return <>
  {sectionsData.map((sec)=>(
      <section key={sec.id}>
          
          <div className=" flex flex-col p-5">
          <div className={`container w-11/12 xl:w-10/12 m-auto flex flex-col-reverse ${sec.id%2==0 ?'xl:flex-row-reverse' : 'xl:flex-row'}  items-center justify-between gap-12 md:gap-8 p-20 shadow0 rounded-md`}>
              <div className="text-content">
              <h2 className={
                  `text-2xl   lg:text-3xl  mb-4
                  text-gray-900
                  text-bold
                  text-center xl:text-left
                  
                  `
                  }>{sec.title}</h2>
                  <p className={`
                      text-gray-600
                      text-base xl:text-xl 
                       text-center xl:text-left 
                       xl:me-12  px-auto  xl:px-0 `
                      }>{sec.paragraph}</p>
                  </div>
                  <img src={sec.img} alt={sec.imgAlt} className={`w-full xl:w-[45%]`} width={600} height={400} />
                  </div>  
                  </div>
                  
          </section>
    ))}
  </>;
}

export default Sections

