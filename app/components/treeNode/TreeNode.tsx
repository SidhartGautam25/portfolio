// interface TreeNodeProps {
//   section: string;
//   items: { name: string; logo: string }[];
// }

// const TreeNode: React.FC<TreeNodeProps> = ({ section, items }) => {
//   return (
//     <div className="mb-4">
//       <p className="text-green-500 font-bold">{section}</p>
//       <ul className="ml-4">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-center space-x-2 mb-2">
//             <img
//               src={item.logo}
//               alt={item.name}
//               className="w-8 h-8 grayscale"
//             />
//             <span className="text-white text-lg">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

interface TreeNodeProps {
  section: string;
  items: { name: string; logo: string }[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ section, items }) => {
  return (
    <div className="mb-4">
      <p className="text-green-500 font-bold">{section}</p>
      <ul className="ml-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 mb-2">
            <img
              src={item.logo}
              alt={item.name}
              className="w-8 h-8 grayscale"
            />
            <span className="text-white text-lg">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TreeNode;
