
import { get_thickness_by_id, get_color_type_by_ids } from '../assets/utils';

const PriceTableComponent = ({ product }) => {
  return (
    <div className="relative overflow-x-auto mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-[#0ac0ac] ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Grosime
            </th>
            <th scope="col" className="px-6 py-3">
              Finisaj
            </th>
            <th scope="col" className="px-6 py-3">
              Preț / mp
            </th>
          </tr>
        </thead>
        <tbody>
          {
            product.prices.map((p, key) => (
              <tr key={key} className="bg-white border-b border-gray-200">
                <td className="px-6 py-4">{get_thickness_by_id(p.thickness_id).value}</td>
                <td className="px-6 py-4 uppercase">
                  {
                    get_color_type_by_ids(p.color_type).map((c, key) => (
                      <p key={key}>{c.name}</p>
                    ))
                  }
                </td>
                <td className="px-6 py-4">{p.price} {} RON</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default PriceTableComponent;