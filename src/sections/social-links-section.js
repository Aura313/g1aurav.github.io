import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';

export class SocialLinksSection extends React.Component {
  render() {
    return (
      <Card elevation={0}>
        <CardContent style={{padding: 10}}>
          <div style={{ display: 'flex' }}>
            {this.props.resumeData.socialLinks.map(link => (
              <span style={{ flex: 1, textAlign: 'center' }}>
                <a href={link.address} style={{ color: '#78909c', fontSize: 25 }}>
                  {React.createElement("i", { class: link.icon })}
                </a>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
}