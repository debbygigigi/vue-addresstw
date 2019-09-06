import twzipcode from 'twzipcode-data'

let data = twzipcode()

export const counties = data.counties.map(county => county.name)
export const zipcodes = data.zipcodes.map(zipcode => {
  return {
    zipcode: zipcode.id,
    county: zipcode.county,
    city: zipcode.city
  }
})
