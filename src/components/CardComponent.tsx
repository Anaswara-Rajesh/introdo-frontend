import { Card } from "react-bootstrap";
import useIsMobile from "../hooks/useIsMobile";

const CardComponent = ({
  title,
  description,
  children,
  className,
  paddingTitle,
  paddingDescription,
}: any) => {
  const isMobile = useIsMobile();

  return (
    <Card className={className} style={{ width: isMobile ? "90%" : "" }}>
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
};

export default CardComponent;
