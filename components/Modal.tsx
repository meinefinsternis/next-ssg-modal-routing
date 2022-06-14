import { Overlay } from "components/Overlay";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Overlay>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div>{children}</div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Overlay>
  );
};
