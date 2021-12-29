import React, { useState, useEffect } from "react";
import * as userService from "../Services/userService";
import SearchByName from "./SearchByName";
import SearchByTag from "./SearchByTag";
import InputTags from "./InputTags";
import ExpandButton from "./ExpandButton";
import { Avatar } from "@mui/material";
import { Paper } from "@material-ui/core";

const UserProfiles = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [searchedName, setSearchedName] = useState("");
  const [searchedTag, setSearchedTag] = useState("");

  useEffect(() => {
    userService
      .getUserInfo()
      .then(onGetUserInfoSuccess)
      .catch(onGetUserInfoError);
  }, []);

  const onGetUserInfoSuccess = (response) => {
    console.log(response.data.results);

    setUserInfo(response.data.results);
  };

  const onGetUserInfoError = (error) => {
    console.log(error);
  };

  const usersWithTags = userInfo?.forEach((users) => {
    Object.assign(users, { tags: [] });
  });

  useEffect(() => {
    setUserInfo(usersWithTags);
  }, [usersWithTags]);

  const chosenTags = (tags) => tags;

  const handleNameSearchInput = (event) => {
    setSearchedName(event.target.value);
  };

  const handleTagSearchInput = (event) => {
    setSearchedTag(event.target.value);
  };

  return (
    <>
      <div>
        <SearchByName handleNameSearchInput={handleNameSearchInput} />
      </div>
      <div>
        <SearchByTag handleTagSearchInput={handleTagSearchInput} />
      </div>
      <div className="display">
        {userInfo &&
          userInfo
            .filter((user) => {
              if (searchedName === "") {
                return user;
              } else if (
                user.name.first
                  .toLowerCase()
                  .includes(searchedName.toLowerCase()) ||
                user.name.last
                  .toLowerCase()
                  .includes(searchedName.toLowerCase())
              ) {
                return user;
              } else {
                return null;
              }
            })

            // .filter((taggedUser) => {
            //   if (searchedTag === "") {
            //     return taggedUser;
            //   } else if (
            //     taggedUser.tags
            //       .map((tagger) => tagger)
            //       .toLowerCase()
            //       .includes(searchedTag.toLowerCase())
            //   ) {
            //     return taggedUser;
            //   } else {
            //     return null;
            //   }
            // })

            .map((user, index) => {
              return (
                <div key={`Users-${user.login.uuid}`} className="card-border">
                  <Paper elevation={5}>
                    <Avatar
                      className="avatar-img"
                      sx={{ width: 156, height: 156 }}
                      alt="Profile pic"
                      src={user.picture.large}
                    />

                    <div>
                      <div>Name: {user.name.first + " " + user.name.last}</div>
                      <div>Email: {user.email}</div>

                      <div>
                        <InputTags
                          chosenTags={chosenTags}
                          userId={user.login.uuid}
                        />
                      </div>

                      <ExpandButton
                        index={index}
                        gender={user.gender}
                        age={user.dob.age}
                        location={user.location}
                        number={user.cell}
                      />
                    </div>
                  </Paper>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default UserProfiles;
