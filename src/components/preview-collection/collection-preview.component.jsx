import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

export const CollectionPreview = ({title, items}) => {
    return <div className='collection-preview '>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, ind) => ind < 4).map(item => (<CollectionItem key={item.id} {...item}/>))
            }
        </div>
    </div>
}