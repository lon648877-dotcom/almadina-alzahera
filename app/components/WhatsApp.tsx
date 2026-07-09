"use client";

export default function WhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/971507605744"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="34"
          height="34"
          fill="#fff"
        >
          <path d="M19.11 17.32c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.47s1.06 2.88 1.2 3.08c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
          <path d="M16.01 3C8.84 3 3 8.84 3 16c0 2.29.6 4.53 1.73 6.5L3 29l6.69-1.75A13 13 0 1 0 16.01 3zm0 23.6c-2 0-3.95-.54-5.66-1.57l-.41-.24-3.97 1.04 1.06-3.87-.27-.4A10.56 10.56 0 1 1 16 26.6z" />
        </svg>
      </a>

      <style jsx>{`
        .whatsapp-btn {
          position: fixed;
          left: 22px;
          bottom: 22px;
          width: 64px;
          height: 64px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 999999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-btn:hover {
          transform: scale(1.12);
          background: #1ebe5d;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}