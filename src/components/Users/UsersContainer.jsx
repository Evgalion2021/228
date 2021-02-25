import Users from "./Users";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../redux/usersPageReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }


  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged} usersData={this.props.usersData}
        totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
        follow={this.props.follow} unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      /> </>
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, getUsers
})(UsersContainer);
