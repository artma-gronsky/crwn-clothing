import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import {NavLink} from "react-router-dom";

export const CollectionPreview = ({title, items}) => {
    return <div className='collection-preview '>
        <NavLink to={`${title}`}><h1 className='title'>{title.toUpperCase()}</h1></NavLink>
        <div className='preview'>
            {
                items.filter((item, ind) => ind < 4).map(item => (<CollectionItem key={item.id} {...item}/>))
            }
        </div>
    </div>
}