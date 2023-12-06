import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/atoms/Button";
import Modal from "../Modal";
import { appURL } from "../../services/connection";

import ques from "../../../public/icons/ques.svg";

import styles from "./ProfileTabLeftSide.module.css";

function ProfileTabLeftSide() {
  const { data: session } = useSession();
  const token = session?.user.user.token.token.userToken;
  const email = session?.user.user.token.token.email;
  const [image, setImage] = useState<any>();
  const [removeProfilePic, setRemoveProfilePic] = useState(false);
  const [successNotification, setSuccessNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  const onCloseModal = () => {
    setRemoveProfilePic(false);
    setSuccessNotification(false);
  };

  const uploadPic = () => {
    setLoading(true);
    setSuccessNotification(false);
    setErrMsg("");
    const file: any = imageRef?.current?.files?.[0];
    const allowedExtension = ["image/jpeg", "image/jpg", "image/png"];
    const type = file!.type;
    if (allowedExtension.indexOf(type) > -1) {
      const formData = new FormData();
      formData.append("file", file!);
      formData.append("email", email);
      axios
        .post(`${appURL}/upload_profile_image`, formData, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          console.log("res", res.data.data);
          if (res.status === 200) {
            setLoading(false);
            setImage(res.data.data[0].profile_image);
            setSuccessNotification(true);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      setErrMsg("Please select the correct image format");
      setLoading(false);
    }
  };

  const removePic = () => {
    setRemoveProfilePic(false);
    setLoading(true);
    axios
      .post(
        `${appURL}/remove_profile_image`,
        { email },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setImage(
            "https://crestlearn-profile-photos.s3.eu-west-2.amazonaws.com/default-profile-image.png"
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleClick = () => {
    setRemoveProfilePic(true);
  };

  useEffect(() => {
    const data = {
      email: session?.user.user.token.token.email,
      password: session?.user.user.token.token.userPasword,
    };
    axios
      .post(`${appURL}/login`, data)
      .then((response) => {
        setImage(response.data.data[0].user.profile_image);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      {removeProfilePic && (
        <Modal onClose={() => onCloseModal()} isOpen={removeProfilePic}>
          <div className={styles.modalImgDiv}>
            <Image src={ques} />
          </div>
          <p className={styles.modalText}>
            Are you sure you want to remove your <br /> profile picture?
          </p>
          <div className={styles.btnDiv}>
            <Button
              id="removeProfilePicture"
              variant="primary"
              onClick={removePic}
            >
              Remove Picture
            </Button>
          </div>
        </Modal>
      )}
      {successNotification && (
        <Modal onClose={() => onCloseModal()} isOpen={successNotification}>
          <p className={styles.modalText2}>
            Profile picture updated successfully
          </p>
        </Modal>
      )}
      <div className={styles.profileTabLeftSidecircle1}>
        <div className={styles.profileTabLeftSideInnerCircle}>
          {
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          }
        </div>
      </div>
      {loading === true ? (
        <div className="flex justify-center items-center mt-4">
          <div>
            <Image src="/icons/spinner.gif" width={35} height={35} alt="" />
          </div>
        </div>
      ) : null}

      <div className={styles.profiletabLeftSideLabelDiv}>
        <label className={styles.profiletabLeftSideLabel} htmlFor="picture">
          Upload Picture
          <input
            type="file"
            hidden
            id="picture"
            ref={imageRef}
            onChange={uploadPic}
          />
        </label>
      </div>
      <div className={styles.errorMessage}>{errMsg}</div>
      <div
        className={styles.removePhotoText}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        Remove Photo
      </div>
    </div>
  );
}

export default ProfileTabLeftSide;
