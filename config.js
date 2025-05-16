// Map configuration
export const config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3LXZpbmNlbnQiLCJhIjoiY202OW4wNm5yMGlubzJtcTJmMnBxb2x1cSJ9.jrR3Ucv9Nvtc-T_7aKIQCg',
    CSV: '../data/locations.csv',
    title: 'Heatmaps - Number of Children from Households above Different Income Levels',
    description: 'Heatmaps of density of children ages 5-14 from households above different income levels in the United States.',
    sideBarInfo: ["Location_Name"],
    popupInfo: ["Location_Name"],
    token: 'pk.eyJ1IjoiYW5kcmV3d3ZpbmNlbnQiLCJhIjoiY2xkdzZ1ejB4MHRxbDN2bzZ0ZGNvMnY5YiJ9.zqIgFE8xhfvgRqR1GQgK_Q',
    container: 'map',
    defaultShapeSizes: {
        circle: 8,
        square: 8,
        star: 10,
        triangle: 10,
        diamond: 9,
        hexagon: 9,
        pentagon: 9,
        cross: 10
    },
    defaultStrokeWidths: {
        circle: 2,      // Base stroke width for simple shapes
        square: 2,      // Match circle stroke width
        star: 2.5,      // Slightly thicker for complex shapes
        triangle: 2.5,  // Match star stroke width
        diamond: 2,     // Match simple shape stroke width
        hexagon: 2,     // Match simple shape stroke width
        pentagon: 2,    // Match simple shape stroke width
        cross: 2.5      // Match complex shape stroke width
    },
    iconConfig: {
        canvasSize: 32,       // Size of the canvas for map icons
        displaySize: 18,      // Base size for calculations
        mapIconScale: 1,   // Scale factor for icons on the map
        padding: 4,           // Padding around shapes
        strokeScale: 0.5     // Scale factor for stroke widths (smaller = thinner strokes)
    },
    // Define status colors
    statusColors: {
        '#Marketing1': '#027804',    // Green for Number 1
        '#Marketing2': '#f1f505',    // Yellow for Number 2
        '#Marketing3': '#fa9393',    // Light Red for Number 3
        '#Marketing-No': '#bf0202',    // Dark Red for No
        '#RE-Top-3': '#727375',    // Grey for RE Top 3
        '#Green-Green': '#a9ebaa'    // Light Green for Green-Green locations
    },

    // List of major cities/metro areas for quick navigation
    cities: [
        {name: 'AZ - Phoenix', coordinates: [-111.91548899052682,33.57705672290719], zoom: 10},
        {name: 'CA - Santa Barbara', coordinates: [-119.7173, 34.4241], zoom: 12},
        {name: 'FL - Orlando', coordinates: [-81.3871, 28.5431], zoom: 11},
        {name: 'FL - Tampa', coordinates: [-82.5072, 27.9518], zoom: 10},
        {name: 'FL - West Palm Beach', coordinates: [-80.0834, 26.7329], zoom: 11},
        {name: 'NY - NYC', coordinates: [-73.9685, 40.7543], zoom: 12},
        {name: 'TX - Dallas', coordinates: [-96.76506510196516, 33.10530243278296], zoom: 9.5},
        {name: 'TX - Fort Worth', coordinates: [-97.39730694639249, 32.710623440498374], zoom: 9.5},
        {name: 'TX - Houston', coordinates: [-95.3809, 29.7722], zoom: 9.5},
        {name: 'WA - Seattle', coordinates: [-122.3322, 47.6108], zoom: 9.5},

        

    ],

    locationLayers: [
        {
            id: 'locations',
            name: 'Top 3 Microschool Locations',
            file: 'data/final_locations.kml',
            defaultShape: 'circle',  // This location uses circles
            defaultChecked: false,
            defaultLabels: false,
            styles: {
                '#RE-Top-3': '#f8ea01',    // Yellow for potential partners
                '#Marketing-Pick': '#039147',      // Green for active locations
                '#Green-Green': '#039147'      // Green for active locations
            }
        }
    ]
};
