/**
 * A universal interface that can be extended by other interfaces.
 * interfaces can only be extended. type cannot be extended to another type
 * but you can extend a type into an interface
 */

// Works
// type isLightMode = {
//     isLightMode: boolean;
// }
// interface isLightModeInterface extends isLightMode {
//     sampleProps: string;
// }

// incorrect way of doing it. 

// type isLightMode = {
//     isLightMode: boolean;
// };

// this will give you an error of '= is expected'
// type isLightModeType extends isLightMode = {
//     sampleProps: string;
// }

interface isDarkMode {
    isDarkMode: boolean;
}

export default isDarkMode;
