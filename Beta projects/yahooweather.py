

from weather import Weather, Unit

wthr=Weather(unit=Unit.CELSIUS)

lookup=wthr.lookup_by_location('halifax')
condition=location.condition
print(condition.text)
