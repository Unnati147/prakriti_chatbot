import PropTypes from "prop-types";
import parse from "html-react-parser";
import { memo, useContext, useState } from "react";
import { ChatSendMessage } from "./Chatbot";
import Modal from "./Modal";
import { BsExclamationCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { MemoizedDownload } from "./DownloadButton";
import { SimpleMessage } from "./SimpleMessage";
import { QuestionMessage } from "./QuestionMessage";
import ShareButtonMemoized from "./ShareButton";

const ChatMessage = ({ message }) => {
  const [selected, setSelected] = useState(false);
  const { handleClick } = useContext(ChatSendMessage);
  const [modalOpen, setModalOpen] = useState(false);

  const handleShowModal = () => {
    setModalOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  if (message?.share) {
    return (
      <SimpleMessage>
        <ShareButtonMemoized dosha={message?.dosha} key={2} />
      </SimpleMessage>
    );
  } else if (message?.download) {
    return (
      <SimpleMessage>
        <MemoizedDownload blob={message?.blob} />
      </SimpleMessage>
    );
  } else if (typeof message === "string") {
    return <SimpleMessage>{parse(message)}</SimpleMessage>;
  } else if (typeof message === "object") {
    const len = Object.keys(message["options"]).length;
    if (len === 2) {
      return (
        <QuestionMessage>
          <>
            <div className="bg-gray-200 p-2 w-full  rounded-lg font-lora">
              {message["question"]}
            </div>
            <div className="w-full pt-1 flex gap-1">
              {Object.keys(message?.options).map((objkey, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full gap-1 flex flex-row justify-between items-center ${
                      selected && "hidden"
                    }`}
                  >
                    <input
                      type="radio"
                      name="confirmation"
                      id="confirmbtn"
                      className="hidden"
                      value={String(message?.options[objkey])}
                    />
                    <label
                      htmlFor="confirmbtn"
                      onClick={(e) => {
                        setSelected(true);
                        handleClick(e.target.dataset?.value);
                      }}
                      className="font-lora text-center hover:bg-blue-600 select-none hover:text-white  transition-colors capitalize border-2 border-gray-400 rounded-md w-full py-1 shadow-lg"
                      data-value={String(message?.options[objkey])}
                    >
                      {String(message?.options[objkey])}
                    </label>
                  </div>
                );
              })}
            </div>
          </>
        </QuestionMessage>
      );
    } else
      return (
        <>
          {message?.assets && (
            <Modal
              setModalOpen={handleCloseModal}
              modalOpen={modalOpen}
              assets={message?.assets}
              title={message["question"]}
            />
          )}
          <QuestionMessage>
            <>
              <div className="bg-gray-200 flex flex-row justify-between items-center p-2 w-full rounded-lg font-lora ">
                <span>{parse(message["question"])}</span>
                {message?.assets && !selected && (
                  <button
                    type="button"
                    onClick={handleShowModal}
                    className="hover:bg-gray-300 p-1 rounded-lg active:bg-white"
                    data-tooltip-id="description-tooltip"
                    data-tooltip-content="Detailed Explanation of Question"
                  >
                    <BsExclamationCircle size={20} color="red" />
                  </button>
                )}
                <Tooltip id="description-tooltip" place="top" variant="dark" />
              </div>
              <div
                className={`w-full pt-2 flex flex-col flex-wrap gap-2 items-center ${
                  selected && "hidden"
                }`}
              >
                {Object.keys(message?.options).map((objkey, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      htmlFor="confirmbtn"
                      onClick={(e) => {
                        len == 3
                          ? handleClick(String(index), e.target.dataset?.value)
                          : handleClick(e.target.dataset?.value);
                        setSelected(true);
                      }}
                      className="font-lora text-center hover:bg-blue-600 select-none hover:text-white  transition-colors capitalize border-2 py-1 border-gray-400 rounded-md w-full shadow-lg"
                      data-value={String(message?.options[objkey])}
                    >
                      {String(message?.options[objkey])}
                    </button>
                  );
                })}
              </div>
            </>
          </QuestionMessage>
        </>
      );
  }
};

export const BotMessage = memo(ChatMessage);

ChatMessage.propTypes = {
  message: PropTypes.any,
};
