import React from 'react';
import { connect } from 'react-redux';
import PasswordPage from 'components/PasswordPage';
import PasswordPattern from 'components/PasswordPattern';
import { selectShowReenter, selectShowIncorrect } from 'selectors/password';

class PasswordEntry extends React.PureComponent {
  render() {
    const { showReenter, showIncorrect } = this.props;

    return (
      <div>
        <PasswordPage showReenter={showReenter} />
        <PasswordPage showIncorrect={showIncorrect} />
        <PasswordPattern
          buttons={['1', '4', '3', '2']}
          links={['14', '43', '32']}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showReenter: selectShowReenter(state),
  showIncorrect: selectShowIncorrect(state)
});

export default connect(mapStateToProps)(PasswordEntry);
