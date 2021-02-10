import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../redux/usersPageReducer";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    });
  }


  render() {
    return <Users currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged} usersData={this.props.usersData}
      totalUsersCount={this.props.totalUsersСount} pageSize={this.props.pageSize}
      follow={this.props.follow} unfollow={this.props.unfollow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);