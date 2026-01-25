# Device Breakpoints Reference

This document tracks target device dimensions for responsive testing.

## Mobile Devices (Portrait)

| Device | Width | Height | Category | Notes |
|--------|-------|--------|----------|-------|
| Galaxy Z Fold 5 | 344px | 882px | XS Mobile | Narrowest phone |
| Galaxy S8+ | 360px | 740px | XS Mobile | Short height |
| iPhone SE | 375px | 667px | XS Mobile | Shortest height |
| iPhone 12 Pro | 390px | 844px | Mobile | Standard iPhone |
| Samsung Galaxy A51/71 | 412px | 914px | Mobile | Standard Android |
| Galaxy S20 Ultra | 412px | 915px | Mobile | Standard Android |
| Pixel 7 | 412px | 915px | Mobile | Standard Android |
| iPhone XR | 414px | 896px | Mobile | Larger iPhone |
| iPhone 14 Pro Max | 430px | 932px | Mobile | Max iPhone |
| Surface Duo | 540px | 720px | Phablet | Short but wide |

## Tablet Devices

| Device | Width | Height | Category | Notes |
|--------|-------|--------|----------|-------|
| iPad Mini | 768px | 1024px | Tablet | Portrait |
| iPad | 810px | 1080px | Tablet | Portrait |
| iPad Air | 820px | 1180px | Tablet | Portrait |
| iPad Pro 11" | 834px | 1194px | Tablet | Portrait |
| iPad Pro 12.9" | 1024px | 1366px | Tablet | Portrait |

## Special Devices (Landscape/Short)

| Device | Width | Height | Category | Notes |
|--------|-------|--------|----------|-------|
| Nest Hub | 1024px | 600px | Smart Display | Wide but very short |
| Nest Hub Max | 1280px | 800px | Smart Display | Wide, short |
| Surface Duo (landscape) | 720px | 540px | Phablet | Landscape mode |

## Tailwind Breakpoints

| Breakpoint | Min-Width | Target Devices |
|------------|-----------|----------------|
| Default | 0px | XS Mobile (< 640px) |
| `sm:` | 640px | Large phones, small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops, landscape tablets |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

## Custom Height Breakpoints

| Breakpoint | Media Query | Target Devices |
|------------|-------------|----------------|
| `short:` | max-height: 700px | Nest Hub, landscape tablets, iPhone SE |
| `tall:` | min-height: 800px | Most phones in portrait |
| `wide-short:` | min-width: 1024px + max-height: 700px | Nest Hub specifically |

## Design Strategy by Category

### XS Mobile (< 375px width)
- 2-column link grids minimum
- Hide non-essential content
- Smallest text sizes
- Tightest spacing

### Mobile (375px - 639px)
- 2-column link grids
- Condensed spacing
- May hide secondary content

### Tablet (640px - 1023px)
- 3-column link grids
- Normal spacing
- Full content visible

### Desktop (1024px+)
- Full layout
- Maximum spacing
- All features enabled

### Short Height (< 700px)
- Reduce all vertical margins
- Hide SEO text
- Condensed link gaps
- Smaller copyright bar offset
