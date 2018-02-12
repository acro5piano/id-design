import React, { Component } from 'react';

export default class Top extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="u-page-title">
          <h2 className="Top-head">
            Contact
          </h2>
        </div>
        <div className="Contact-table">
          <table className="u-full-width">
            <tbody>
              <tr>
                <th>社名</th>
                <td>有限会社IDデザイン <br />TT＆T Archi Lab株式会社</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>mail@ttntarchilab.com</td>
              </tr>
              <tr>
                <th>住所</th>
                <td>〒150-0034 東京都渋谷区代官山町17-1　アドレス代官山A棟3307</td>
              </tr>
            </tbody>
          </table>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1451918592816!2d139.70089421525807!3d35.64879428020187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b45a4f8b5c1%3A0x4aaee424e47e6180!2z44CSMTUwLTAwMzQgVMWNa3nFjS10bywgU2hpYnV5YS1rdSwgRGFpa2FueWFtYWNoxY0sIDE34oiSMywg5Luj5a6Y5bGx44Ki44OJ44Os44K544K244O744Os44K444OH44Oz44K544Kk44O844K544OI!5e0!3m2!1sen!2sjp!4v1518270754459" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}
