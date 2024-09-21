import { Card } from "react-bootstrap";

const CardComponent = ({
  title,
  description,
  children,
  className,
  paddingTitle,
  paddingDescription,
}: any) => (
  <Card className={className}>
    <Card.Body>
      {title && <h2 className={`card-title ${paddingTitle}`}>{title}</h2>}
      {description && (
        <p className={`card-description ${paddingDescription} pt-3`}>
          {description}
        </p>
      )}
      {children}
    </Card.Body>
  </Card>
);
export default CardComponent;
