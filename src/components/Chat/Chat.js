import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'

class Chat extends Component {

  constructor() {
    super();
    this.state = {
      messageList: [{
        author: 'me',
        type: 'text',
        data: {
          text: 'Help me!'
        }
      },
      {
        author: 'them',
        type: 'text',
        data: {
          text: 'Please provide us your query.'
        }
      },
      {
        author: 'me',
        type: 'text',
        data: {
          text: 'What is my email id?'
        }
      },
      {
        author: 'them',
        type: 'text',
        data: {
          text: 'Your email id is harshal.ahire@lntinfotech.com. Thanks for reaching out to us Harshal.'
        }
     },
     {
        author: 'me',
        type: 'text',
        data: {
          text: '😃Thank you!'
        }
     }
    ]
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {

    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Self Service Portal',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Chat