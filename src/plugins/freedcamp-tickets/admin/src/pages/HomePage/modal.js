import React, { useState } from "react";

import { Button } from "@strapi/design-system";
import { Typography } from "@strapi/design-system";
import { DatePicker } from "@strapi/design-system";
import { Box } from "@strapi/design-system";
import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@strapi/design-system";

export default function ModalButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState();
  return (
    <>
      <Button onClick={() => setIsVisible((prev) => !prev)}>
        Click to open Modal
      </Button>
      <p
        style={{
          height: "60vh",
        }}
      >
        This is a raw content
      </p>
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
