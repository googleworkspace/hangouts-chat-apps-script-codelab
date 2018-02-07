var DEFAULT_IMAGE_URL = "https://goo.gl/bMqzYS";
var header = {
  "header": {
    "title" : "Attendance Bot",
    "subtitle" : "Log your vacation time",
    "imageUrl" : DEFAULT_IMAGE_URL
  }
};

/**
 * Creates a card-formatted response.
 *
 * @param widgets the UI components to send
 */
function createCardResponse(widgets) {
  return {
    "cards": [
      header,
      {
        "sections": [{
          "widgets": widgets
        }]
    }]
  };
}

/**
 * Responds to a MESSAGE event triggered in Hangouts Chat.
 *
 * @param event the event object from Hangouts Chat
 */
function onMessage(event) {
  var userMessage = event.message.text;

  var widgets = [{
            "textParagraph": {
              "text": "You said: " + userMessage
            }
          }];

  return createCardResponse(widgets);
}

/**
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 *
 * @param event the event object from Hangouts Chat
 */
function onAddToSpace(event) {
  console.info(event);

  var message = "";

  if (event.space.type == "DM") {
    message = "Thank you for adding me to a DM, " +
      event.user.displayName + "!";
  } else {
    message = "Thank you for adding me to " +
      event.space.displayName;
  }

  return { "text": message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 *
 * @param event the event object from Hangouts Chat
 */
function onRemoveFromSpace(event) {
  console.info(event);
  console.info("Bot removed from ", event.space.name);
}