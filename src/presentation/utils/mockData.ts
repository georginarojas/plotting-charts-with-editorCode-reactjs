// export const sample = `{type: 'data', timestamp: 467634240000, os: 'linux', min_response_time: 0.3, max_response_time: 1.8}
// {type: 'data', timestamp: 783163440000, os: 'linux', min_response_time: 0.4, max_response_time: 1.9}`

export const sample = `{type: 'start', timestamp: 151986240000, select: ['min_response_time', 'max_response_time'], group: ['os']}
{type: 'span', timestamp: 151986240000, begin: 151986240000, end: 1519862460000}
{type: 'data', timestamp: 467634240000, os: 'linux', min_response_time: 0.3, max_response_time: 1.8}
{type: 'data', timestamp: 783163440000, os: 'linux', min_response_time: 0.4, max_response_time: 1.9}
{type: 'data', timestamp: 1519862460000, os: 'linux', min_response_time: 0.2, max_response_time: 0.9}
{type: 'stop', timestamp: 1519862460000}`

export const startType = {
  type: 'start',
  timestamp: 151986240000,
  select: ['min_response_time', 'max_response_time'],
  group: ['os', 'browser', 'processor']
}
export const spanType = {
  type: 'span',
  timestamp: 151986240000,
  begin: 151986240000,
  end: 1519862460000
}

export const dataType = [
  {
    type: 'data',
    timestamp: 467634240000,
    os: 'linux',
    min_response_time: 0.3,
    max_response_time: 1.8
  },
  {
    type: 'data',
    timestamp: 783163440000,
    os: 'linux',
    min_response_time: 0.4,
    max_response_time: 1.9
    // processor: 'cpu',
  },
  {
    type: 'data',
    timestamp: 1519862460000,
    os: 'linux',
    min_response_time: 0.2,
    max_response_time: 0.9
    // processor: 'cpu'
  },
  /// //////////////////////////////////////////
  {
    type: 'data',
    timestamp: 151986240000,
    os: 'linux',
    browser: 'chrome',
    min_response_time: 0.1,
    max_response_time: 1.7,
    processor: 'cpu',
    total_time: 2.3
  },
  {
    type: 'data',
    timestamp: 467634240000,
    os: 'linux',
    browser: 'chrome',
    min_response_time: 0.3,
    max_response_time: 1.8,
    processor: 'cpu',
    total_time: 2.35
  },
  {
    type: 'data',
    timestamp: 783163440000,
    os: 'linux',
    browser: 'chrome',
    min_response_time: 0.4,
    max_response_time: 1.9,
    total_time: 2.35
  },
  {
    type: 'data',
    timestamp: 151986240000,
    os: 'mac',
    browser: 'chrome',
    min_response_time: 0.5,
    max_response_time: 1.2,
    total_time: 1.9
  },
  {
    type: 'data',
    timestamp: 1519862460000,
    os: 'linux',
    browser: 'chrome',
    min_response_time: 0.2,
    max_response_time: 0.9
  },
  {
    type: 'data',
    timestamp: 1519862460000,
    os: 'mac',
    browser: 'chrome',
    min_response_time: 0.9,
    max_response_time: 1.0
  },

  {
    type: 'data',
    timestamp: 51986240000,
    os: 'linux',
    browser: 'firefox',
    min_response_time: 0.2,
    max_response_time: 0.9
  },
  {
    type: 'data',
    timestamp: 1519862460001,
    os: 'mac',
    browser: 'firefox',
    min_response_time: 0.1,
    max_response_time: 1.0
  }
]
export const stopType = {
  type: 'stop',
  timestamp: 1519862460000
}

export const mockSeries = [
  {
    name: 'linux_min_response_time',
    data: [
      { timestamp: 467634240000, value: 0.3 },
      { timestamp: 783163440000, value: 0.4 },
      { timestamp: 1519862460000, value: 0.2 }
    ]
  },
  {
    name: 'linux_max_response_time',
    data: [
      { timestamp: 467634240000, value: 1.8 },
      { timestamp: 783163440000, value: 1.9 },
      { timestamp: 1519862460000, value: 0.9 }
    ]
  }
]
