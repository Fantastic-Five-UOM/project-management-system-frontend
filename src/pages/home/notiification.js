import './notification.css';
import Notification from '../../img/notification.svg'

const notification = () => {
 return (
    <div className='icons'>
        <div className="icon">
            <img src={Notification} className='iconImg'alt=""/>
            <div className="counter">2</div>

        </div>

    </div>
 )

}
