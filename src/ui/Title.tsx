interface IProps {
  children: React.ReactNode;
}
const Title: React.FC<IProps> = ({ children }) => {
  return <h2>{children}</h2>;
};
export default Title;
