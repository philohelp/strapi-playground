import React, { useState } from "react";

import {
  Button,
  Typography,
  DatePicker,
  Box,
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@strapi/design-system";

import Plus from "@strapi/icons/Plus";

export default function ModalButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState();
  return (
    <>
      <Button
        startIcon={<Plus />}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Ajouter un ticket
      </Button>
      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Title
            </Typography>
          </ModalHeader>
          <ModalBody>
            <DatePicker
              onChange={setDate}
              selectedDate={date}
              label="Date picker"
              name="datepicker"
              clearLabel="Clear the datepicker"
              onClear={() => setDate(undefined)}
              selectedDateLabel={(formattedDate) =>
                `Date picker, current is ${formattedDate}`
              }
            />
            {Array(50)
              .fill(null)
              .map((_, index) => (
                <Box key={`box-${index}`} padding={8} background="neutral100">
                  Hello world
                </Box>
              ))}
          </ModalBody>
          <ModalFooter
            startActions={
              <Button
                onClick={() => setIsVisible((prev) => !prev)}
                variant="tertiary"
              >
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button variant="secondary">Add new stuff</Button>
                <Button onClick={() => setIsVisible((prev) => !prev)}>
                  Finish
                </Button>
              </>
            }
          />
        </ModalLayout>
      )}
    </>
  );
}
