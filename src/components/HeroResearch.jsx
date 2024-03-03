import {faUser, faHome, faDatabase, faGear,  faFile, faComment, faBriefcase, faBlog, faBars, faUserLarge, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import CreateMenu from './CreateMenu'
import Sidebar from './Sidebar'



function HeroResearch(){
  
    const data = [
      {
    
        title: 'Home',
        icon: faHome,
        link: '/researchers'
      },
      {
        title: 'Datasets',
        icon: faDatabase,
        link: '/datasets'
      },
      {
        title: 'Papers',
        icon: faFile,
        link: '/papers'
      },
      {
        title: 'Discussions',
        icon: faComment,
        link: '/discussions'
      },
      {
        title: 'Opportunities',
        icon: faBriefcase,
        link: '/opportunities'
      },
      {
        title: 'Blog',
        icon: faBlog,
        link: '/blog'
      }
    ]
    
    const userData = [
      {
        title: 'My Profile',
        icon: faUser,
        link: '/profile'
      },
      {
        title: 'My Work',
        icon: faBriefcase,
        link: '/work'
      },
      {
        title: 'Settings',
        icon: faGear,
        link: '/settings'
      },
     
      {
        title: 'SignOut',
        icon: faRightFromBracket,
        link: '/signout'
      }
    ]
    return(
      <div className=' text-blue-gray-700 '>
        <div className=' py-4 flex flex-row justify-between'>
          <div>
    
         
          <Sidebar items={data} placement="left" header={faBars} size="xl"/>
          </div>
          <Search prompt="Search" />
          <div>
    
         
          <Sidebar items={userData} placement="right" size="xl" header={faUserLarge} />
          </div>
         
        </div>
    
 
        </div>
    )
    }

export default HeroResearch