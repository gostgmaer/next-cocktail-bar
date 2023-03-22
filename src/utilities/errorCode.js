export const errorMsg = {
  E500: {
    message: "Internal server error",
  },
  E400: {
    message: "Input validation error",
  },
  E402: {
    message: "Provider not serving this customer token",
  },

  E403: {
    message: "Customer already served",
  },
  E404: {
    message: "Customer already in Service on other queue",
  },
  E405: {
    message: "Please re-queue customer first.It is found abundant",
  },
  E406: {
    message: "This customer has been already served",
  },
  E407: {
    message: "Customer Service not started",
  },
  E408: {
    message: "Customer Service not started yet or already serviced",
  },
  E409: {
    message: "Failed to Publisher message on kafka",
  },
  E410: {
    message: "Joining details not found",
  },
  E411: {
    message: "Room does not exist",
  },
  E412: {
    message: "Invalid Timezone",
  },
  E413: {
    message: "Holiday",
  },
  E414: {
    message: "Exception cannot join",
  },
  E415: {
    message: "Schedule time cannot join",
  },
  E416: {
    message: "Today is closed",
  },
  E417: {
    message: "Failed Fetch all room details",
  },
  E418: {
    message: "Room configuration not found",
  },
  E419: {
    message: "Excel could not be exported",
  },
  E420: {
    message: "Meeting room id does not exist",
  },
  E421: {
    message: "Customer not found.",
  },
  E422: {
    message: "Failed to create twilio token",
  },
  E423: {
    message: "Timetable saved failed",
  },
  E424: {
    message:
      "Exception Timetable saved failed / Record already exists for the selected date !",
  },
  E425: {
    message: "Provider does not exist",
  },
  E426: {
    message: "Invalid token. This customer does not has this token",
  },
  E427: {
    message: "Customer service Status should be Pending to remove from queue.",
  },
  E428: {
    message: "Queue(s) does not associated to this room",
  },
  E429: {
    message: "Meeting not found to save note.",
  },
  E430: {
    message: "Some queue(s) may be does not exist or deleted",
  },
  E431: {
    message: "Invalid redirection token, provider not found.",
  },
  E432: {
    message: "Invalid Provider Email",
  },
  E433: {
    message: "Customer is already active on other queues of this room",
  },
  E434: {
    message: "Record already exists for the selected date !",
  },
};
