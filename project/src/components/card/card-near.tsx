import {Link} from 'react-router-dom';
import {GenreOffers} from '../../types/offer';

type CardProps = {
  offer: GenreOffers;
};

function CardNear(props: CardProps): JSX.Element {
  const {offer} = props;
  const {id, title, city, images, isPremium, type, price, rate} = offer;
  const ratePercent = parseFloat(rate) * 20;

  return (
    <article className="near-places__card place-card">
      <div className={isPremium ? 'place-card__mark' : ''}>
        <span>{isPremium ? 'Premium' : null}</span>
      </div>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratePercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title} ({city})</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardNear;
