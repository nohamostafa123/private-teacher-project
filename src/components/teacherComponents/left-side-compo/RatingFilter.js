import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';



function RatingFilter() {
    const ratings = [
        { rating: 5.0, count: 7, filledStars: 5 },
        { rating: 4.5, count: 0, filledStars: 4.5 },
        { rating: 3.0, count: 3, filledStars: 3 },
        { rating: 2.0, count: 3, filledStars: 2 },
        { rating: 1.0, count: 2, filledStars: 1 }
    ];

    return (
        <Card className="border-1 mb-4 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">  Filter by rating
                </h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <ListGroup variant="flush" className="list d-flex flex-row-reverse text-end">
                    <ul className="list-unstyled w-100">
                        {ratings.map((rating, index) => (
                            <li key={index} className="d-flex align-items-center justify-content-end mb-3">
                                <span className="text-muted me-auto">{rating.rating} ({rating.count})</span>
                                <div className="stars me-2">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <FontAwesomeIcon
                                            key={starIndex}
                                            icon={starIndex < Math.floor(rating.filledStars) ? solidStar : regularStar}
                                            className="text-warning"
                                        />
                                    ))}
                                </div>
                                <Form.Check type="radio" name="classification" className=" radio-rating" />
                            </li>
                        ))}
                    </ul>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default RatingFilter;