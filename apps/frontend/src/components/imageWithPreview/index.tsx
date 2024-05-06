import {
  Image,
  ImageProps,
  Modal,
  PolymorphicComponentProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

type ImageWithPreviewProps<C = "img"> = PolymorphicComponentProps<
  C,
  ImageProps
>;

export const ImageWithPreview: React.FC<ImageWithPreviewProps> = (props) => {
  const [previewOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        centered
        padding={0}
        size="auto"
        opened={previewOpened}
        onClose={close}
        withCloseButton={false}
      >
        <Image src={props.src} />
      </Modal>

      <Image {...props} onClick={open} />
    </>
  );
};
