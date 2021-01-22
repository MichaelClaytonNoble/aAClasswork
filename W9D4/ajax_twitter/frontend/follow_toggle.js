const { Module } = require("webpack");

class FollowToggle{
  constructor(){
    this.el = $('.follow-toggle'); //finds all buttons with class name follow-toggle
    //imbedded in this button we hid dataset 
    //userId is stored in dataset through the button ====> data-userId = "<%= user.id %>"
    this.userId = this.el.dataset["userId"]; //dataset seems to be a hash that stores the data

    this.followState = this.el.dataset["initial-follow-state"];

  }
}


module.exports = FollowToggle; //makes this class requirable 