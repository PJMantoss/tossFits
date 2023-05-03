import Document, { Html } from 'next/document';

export class MyDocument extends Document {
  render() {
    return (
      <Html>MyDocument</Html>
    )
  }
}

export default MyDocument