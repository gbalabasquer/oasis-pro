import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import './maindeposit.html';
import { doTabShow } from '../../../utils/functions.js';

Template.maindeposit.viewmodel({
  depositData() {
    return { title: 'DEPOSIT', depositType: 'deposit' };
  },
  withdrawData() {
    return { title: 'WITHDRAW', depositType: 'withdraw' };
  },
  tokenTemplate() {
    if (typeof Session.get('tokenTemplate') === 'undefined') {
      Session.set('tokenTemplate', 'ethtokens');
    }
    return Session.get('tokenTemplate');
  },
});

Template.maindeposit.onRendered(() => {
  doTabShow();
});
