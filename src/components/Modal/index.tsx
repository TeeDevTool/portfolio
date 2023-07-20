import { memo, useEffect, useRef, useState } from "react";
import "./index.css";
import NavButton from "../NavButton";
import CloseIcon from "@app/asset/icons/close";
import Badge from "../Badge";

export interface ModalProps {
  title: string | null;
  content: string | null;
  position?: string;
  workplace?: string;
  workplaceURL?: string;
  demoURL?: string;
  stacks?: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  position,
  workplace,
  workplaceURL,
  demoURL,
  stacks,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [opened, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        onClose();
      }
    }

    if (document) document.addEventListener("keydown", handleEscape);

    return () => {
      if (document) document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    if (modalRef.current) {
      if (opened) {
        modalRef.current?.classList.add("is-visible");
      } else {
        modalRef.current?.classList.remove("is-visible");
      }
    }
  }, [opened]);

  useEffect(() => {
    if (title && content) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [title, content]);

  return (
    <div ref={modalRef} className="modal">
      <div className="modal-content">
        <CloseIcon onClick={onClose} />
        <div className="modal-body">
          <h3>{title}</h3>
          <div className="stacks">
            {stacks?.map((stack, i) => (
              <Badge key={`modal-skill-badge-${i}`}>{stack}</Badge>
            ))}
          </div>
          <p>{content}</p>
          {position && workplace && (
            <p>
              {`I have joined the project as a ${position}, working with the team at`}{" "}
              {workplaceURL ? (
                <a className="clickable" href={workplaceURL} target="_blank">
                  {workplace}
                </a>
              ) : (
                workplace
              )}
            </p>
          )}
          {opened && <NavButton url={demoURL} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
